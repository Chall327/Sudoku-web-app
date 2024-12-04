export default function selector(){
    const [keyPressed, setKeyPressed] = useState("");
    const handleKeyDown = (event) => {
        const key = event.key;
        if(!NaN(key) && key >= 0 && key <=9){
            setKeyPressed(key);
        }else if (key === "Backspace"){
            setKeyPressed("")
        }
    };
}
