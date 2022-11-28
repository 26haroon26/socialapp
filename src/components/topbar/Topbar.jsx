import './topbar.css';
import { Search, Person, Chat, Notifications } from '@mui/icons-material'
function Topbar() {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className='logo'>logo</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search />
                    <input type="text" placeholder='Search forfriend, post or video' className='searchInput' />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className='topbarLinks'>Homepage</span>
                    <span className='topbarLinks'>Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className='topbarIconBadge'>1</span>
                    </div><div className="topbarIconItem">
                        <Chat />
                        <span className='topbarIconBadge'>1</span>
                    </div><div className="topbarIconItem">
                        <Notifications />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                </div>
                <img src="/assets/person/2.jpeg" alt=""  className='topbarImg'/>
            </div>
        </div>
    )
}

export default Topbar
