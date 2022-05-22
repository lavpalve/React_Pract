var root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
            
            
document.getElementById('btn').addEventListener('click', ()=>{
    document.getElementById('mainCont').style.backgroundColor = '#0f0f0f';
    document.getElementById('text').innerText = 'This is dark theme';
    document.getElementById('text').color = 'f0f0f0';
});
