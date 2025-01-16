// Import necessary libraries
import React from 'react';

// Alias example (e.g., alias components to '@/components')
import HeaderFooter from '@/components/HeaderFooter';

// App Component
const App: React.FC = () => {
    return (
        <div>
            {/* Using the HeaderFooter Component */}
            <HeaderFooter>
                <main>
                    <section style={{ padding: '20px', textAlign: 'center' }}>
                        <h1>Welcome to Our Application</h1>
                        <p>Enjoy exploring the features of our app!</p>
                    </section>
                </main>
            </HeaderFooter>
        </div>
    );
};

export default App;



import React from 'react';

type HeaderFooterProps = {
    children: React.ReactNode;
};

const HeaderFooter: React.FC<HeaderFooterProps> = ({ children }) => {
    return (
        <>
            {/* Header */}
            <header style={{ background: 'linear-gradient(to right, #3498db, #2ecc71)', color: '#fff', padding: '10px 20px' }}>
                <h2>Application Header</h2>
            </header>

            {/* Main Content */}
            <div>{children}</div>

            {/* Footer */}
            <footer style={{ background: '#2c3e50', color: '#fff', padding: '10px 20px', marginTop: '20px', textAlign: 'center' }}>
                <p>&copy; 2025 Your Application. All Rights Reserved.</p>
            </footer>
        </>
    );
};

export default HeaderFooter;
