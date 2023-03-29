import { SidebarContainer, SidebarIcons, PlayList } from './styles'
import CottageIcon from '@mui/icons-material/Cottage';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SidebarChoice from './SidebarChoice';

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
      <PlayList>PlayList</PlayList>
      <hr />
      <SidebarChoice title="2023 Chillout Music" />
      <SidebarChoice title="Dark Metal" />
    </SidebarContainer>
  )
}
