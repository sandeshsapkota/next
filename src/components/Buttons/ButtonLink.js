export default function ButtonLink(props) {
    return (
        <a href={props.href}
            className={'flex items-center gap-2 link text-sm hover:opacity-80 transition duration-2s' + ' ' + props.className || ''}>{props.children}
        </a>
    )
}