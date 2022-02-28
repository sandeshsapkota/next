export  default function DropdownItem(props) {
    return (
        <a onClick={props.onClick} href={props.href} className="text-gray-600 hover:text-gray-900 transition-3s cursor-pointer group flex rounded-md items-center w-full px-2 py-2 text-sm flex gap-1">
            {props.children}
</a>
    )
}