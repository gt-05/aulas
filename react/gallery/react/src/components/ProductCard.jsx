export default function ProductCard(props) {
    return (
        <>
            <div className="w-[292px] h-[439px]">
                <div className="bg-[#626262] w-full h-[321px]">
                    <img src={props.image} alt="Produto em Alta" 
                    className="w-full h-full object-cover" />
                </div>
                <div>
                    <p className="text-[#8f8f8f] text-[16px] font-[700] leading-[38px]">Tênis</p>
                    <a href={"p/" + props.slug}><p className="text-[28px] font-[400] leading-[38px]">{props.name}</p></a>
                    <p className="text-[24px] font-[700] leading-[38px]"><s class="text-[#8f8f8f] text-[24px] font-[400] leading-[38px]">{props.price}</s> {props.priceDiscount}</p>
                </div>
            </div>
        </>
    );
}