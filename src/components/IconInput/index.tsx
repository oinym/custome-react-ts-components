import "./styles.css";


interface Props {
    class?: string;
    icon: string;// in html code for example: % would be &#37;
    InputProps: any

}

export default function IconInput(props: Props) {
    const baseClass = "input-container";
    const combinedClass = `${baseClass} ${props.class || ''}`.trim();

    return (
        <div className={combinedClass} >
            <input {...props.InputProps} />
            <span >{props.icon}</span>
        </div>
    )
}