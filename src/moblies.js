export default function Mobs(props){
    return(
        <>
        <div class="maindiv">
        <div>
            <img src={props.src1}/>
        </div>
        <div>
        <h3 class="nametag">{props.name},{props.colour}.{props.storage}</h3>
        
        <h4>{props.ratings}{props.purchased}</h4>
        <ul>
            <li><h5>{props.rom}</h5></li>
            <li><h5>{props.display}</h5></li>
            <li><h5>{props.camera}</h5></li>
            <li><h5>{props.processor}</h5></li>
            <li><h5>{props.wartime}</h5></li>
            
        </ul>
        </div>
        <div class="pricediv">
            <div class="pricdiv">
                 <h2>₹ {props.price}</h2>
                 <img src={props.src2} alt="Flipcart Image" width="80px" height="20px" />
            </div>
            <div>
                <h3 class="oldprice">₹ {props.oldprice}</h3>
                <h4>{props.devytype}</h4>
                <h4 class="banktag">Save Extra with {props.offer}</h4>
                <h4>{props.emitype} Months</h4>
            </div>
        </div>

    
        </div>
        </>

    )
}