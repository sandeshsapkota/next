export default function Button(props) {
    return (
        <button
            className={'flex items-center gap-1 capitalize px-3 py-3 text-white bg-indigo-500 hover:bg-indigo-700 transition duration-200 rounded-md focus:bg-indigo-600 focus:outline-none' + ' ' + props.className || ''}>{props.children}
        </button>
    )
}