import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/about";
import Products from "./pages/products";
import ProductDetail from "./pages/productdetail";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Blog from "./pages/blog";
import GetQuote from "./pages/getquote";
import ContactSales from "./pages/contactSales";
import NotFound from "./pages/notfound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/:id" element={<ProductDetail />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Get-Quote" element={<GetQuote />} />
          <Route path="/Contact-Sales" element={<ContactSales />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
