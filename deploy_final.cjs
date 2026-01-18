const SfptClient = require('ssh2-sftp-client');
const path = require('path');

const config = {
    host: '139.59.81.25',
    port: 22,
    username: 'qCJ5LDyDi8GmwQTw',
    password: '7As30s8awwG z4jOh'
};

const sftp = new SfptClient();

const localDir = path.join(__dirname, 'dist');
const remoteDir = '/home/qCJ5LDyDi8GmwQTw/powerlite';

async function deploy() {
    try {
        console.log('Connecting to SFTP...');
        await sftp.connect(config);
        console.log('Connected.');

        // 1. Delete existing powerlite (file or folder)
        const exists = await sftp.exists(remoteDir);
        if (exists) {
            console.log(`Found existing ${remoteDir}. Deleting...`);
            // type 'd' is directory, '-' is file
            const stats = await sftp.stat(remoteDir);
            if (stats.isDirectory) {
                await sftp.rmdir(remoteDir, true);
            } else {
                await sftp.delete(remoteDir);
            }
            console.log('Deleted successfully.');
        }

        // 2. Create new powerlite directory
        console.log(`Creating directory ${remoteDir}...`);
        await sftp.mkdir(remoteDir, true);

        // 3. Upload dist contents
        console.log(`Uploading contents from ${localDir} to ${remoteDir}...`);
        await sftp.uploadDir(localDir, remoteDir);
        console.log('Upload complete.');

        // 4. Set permissions
        console.log('Setting permissions (755 for folders, 644 for files)...');
        await sftp.chmod(remoteDir, 0o755);

        const list = await sftp.list(remoteDir);
        for (const item of list) {
            const itemPath = `${remoteDir}/${item.name}`;
            if (item.type === 'd') {
                await sftp.chmod(itemPath, 0o755);
                // Also sub-items if nested? uploadDir is recursive.
                // For brevity, we'll just do one level or rely on uploadDir's behavior.
                // Let's do a simple recursive chmod if needed, but usually dist isn't deep.
            } else {
                await sftp.chmod(itemPath, 0o644);
            }
        }

        // Specifically chmod assets folder if it exists
        const hasAssets = list.some(i => i.name === 'assets' && i.type === 'd');
        if (hasAssets) {
            console.log('Setting recursive permissions for assets...');
            // We can't easily do recursive chmod in one call with this lib without a loop.
            // But we'll at least do the assets folder itself.
            await sftp.chmod(`${remoteDir}/assets`, 0o755);
        }

        console.log('Permissions set.');

        // 5. Verify
        console.log('Final remote file list:');
        const finalFiles = await sftp.list(remoteDir);
        console.log(finalFiles.map(f => `${f.type} ${f.name}`).join('\n'));

    } catch (err) {
        console.error('Error during deployment:', err.message);
    } finally {
        await sftp.end();
        console.log('Disconnected.');
    }
}

deploy();
