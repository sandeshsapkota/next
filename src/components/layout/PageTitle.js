import Button from "../Buttons/Button";
import Dropdown from "../general/Dropdown";
import Icon from "../general/Icon";
import {Menu} from "@headlessui/react";
import DropdownItem from "../general/DropdownItem";

function trigger() {
    return (
        <Menu.Button>
            <Button> <Icon name={'plus'}/> Appointments</Button>
        </Menu.Button>
    )
}

function content() {
    return (
        <div>
            <DropdownItem href={'/'} >
                <Icon name={'plus'}/>
               Create appointment
            </DropdownItem>
            <DropdownItem>
                <Icon name={'edit'}/>
                 Edit Appointment
            </DropdownItem>
        </div>
    )
}

export default function PageTitle() {
    let pathname = 'test'
    return (
        <div className="flex items-center gap-6 justify-between">
            <h2 className={'font-bold text-3xl uppercase text-gray-900'}> {pathname ? pathname : 'Dashboard'}</h2>
            <Dropdown trigger={trigger} content={content}/>
        </div>
    )
}