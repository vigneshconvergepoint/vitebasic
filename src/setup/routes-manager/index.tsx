// global
import {
    IconChevronRight,
    IconChevronLeft,
    IconFolderOpen,
    IconCreation,
    IconDashboard,
} from '@convergepoint/sass-icons';

function Licenseportal() {
    const user: any = null;
    return (
        <>
            <h1 className="grayColor600">hai from vite! {user?.name}</h1>
            <ul>
                <li>
                    <IconChevronRight />
                </li>
                <li>
                    <IconChevronLeft />
                </li>
                <li>
                    <IconFolderOpen />
                </li>
                <li>
                    <IconCreation />
                </li>
                <li>
                    <IconDashboard />
                </li>
            </ul>
        </>
    )
}

export default Licenseportal
