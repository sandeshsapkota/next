
export default function Icon({name,className}) {
    return (
        <svg className={'svg-icon ' + className}>
            <use xlinkHref={'./icons.svg#icon-' + name}/>
        </svg>
    )
}
