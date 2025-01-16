import React from 'react';

class MyClass {
    private var1: string;
    private var2: number;

    constructor() {
        this.var1 = ""; // Initialize with default values
        this.var2 = 0;
    }

    // Function to set values for private variables
    public setValues(value1: string, value2: number): void {
        this.var1 = value1;
        this.var2 = value2;
    }

    // Function to get values for demonstration
    public getValues(): { var1: string; var2: number } {
        return {
            var1: this.var1,
            var2: this.var2,
        };
    }
}

const App: React.FC = () => {
    // Create an instance of MyClass
    const myClassInstance = new MyClass();

    // Set values using the setValues method
    myClassInstance.setValues("Hello, World!", 42);

    // Retrieve values for display
    const values = myClassInstance.getValues();

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Class Example</h1>
            <p>Variable 1: {values.var1}</p>
            <p>Variable 2: {values.var2}</p>
        </div>
    );
};

export default App;
