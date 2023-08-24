const styles = {
    backgroundColor: 'green',
    padding: 12,
};

export const A= ({ clicks, onIncrement, onReset }) =>  {
   
    return (
        <div style={styles}>
            <p>Clicks: {clicks}</p>
            <button onClick ={onIncrement}>Increment</button>
            <B value={clicks} onReset={onReset} />
            </div>
    );
    }; 