import Icon from "./Icon";

function SectionHeader(props) {
    return (
        <div className={'flex items-center justify-between  gap-8'}>
            <h2 className={'heading-primary heading-primary-lg'}>{props.title}</h2>
            {props.to &&
                <a className={'btn btn-link flex items-center gap-1.5 text-primary-600 capitalize '}
                   href={props.to}><span>{props.toText}</span>
                    <Icon className={'mt-1 !w-5 !h-5'} name={'arrow-right'}/> </a>}
        </div>
    )
}

export default SectionHeader