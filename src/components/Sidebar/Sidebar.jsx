import { SidebarContainer, SidebarIcons } from './styles'
import CottageIcon from '@mui/icons-material/Cottage';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SidebarChoice from './SidebarChoice';
import Playlist from './Playlist';

export default function Sidebar() {
  return (
     <SidebarContainer>
      <img src="../../Logo.png" alt="Logo" />
      <hr />
      <SidebarIcons>
        <SidebarChoice title="Home" Icon={CottageIcon} />
        <SidebarChoice title="Search" Icon={SearchIcon} />
        <SidebarChoice title="Library" Icon={LibraryMusicIcon} />
      </SidebarIcons>
      <Playlist />
    </SidebarContainer>
  )
}
