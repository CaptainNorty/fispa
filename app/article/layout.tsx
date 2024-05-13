export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <div>
          <p>Test</p>
        </div>
        <div>{children}</div>
      </div>
    );
  }