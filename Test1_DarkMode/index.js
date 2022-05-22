var root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
            
            
function changeStyle(){
    document.getElementById('mainCont').style.backgroundColor = '#0f0f0f';
    document.getElementById('text').innerText = 'This is dark theme';
    document.getElementById('text').style.color = 'f0f0f0';
});
