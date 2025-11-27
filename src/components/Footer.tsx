const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 px-6">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} IoT Developer. Building the connected future, one device at a time.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
