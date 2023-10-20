import { 
    BottomNavigation,
    BottomNavigationItem,
    BottomNavigationLabel,
    BottomNavigationIcon 
} from 'chakra-ui-bottom-navigation';
import {BiHomeAlt2, BiSearchAlt, BiHistory, } from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'

export const Navigation = () => {

    
  
    return (
      <BottomNavigation value='/' >
        <BottomNavigationItem value="/">
          <BottomNavigationIcon as={BiHomeAlt2} />
          <BottomNavigationLabel>Home</BottomNavigationLabel>
        </BottomNavigationItem>
  
        <BottomNavigationItem value="/franchise">
          <BottomNavigationIcon as={BiSearchAlt} />
          <BottomNavigationLabel>Search</BottomNavigationLabel>
        </BottomNavigationItem>
  
        <BottomNavigationItem value="/history">
          <BottomNavigationIcon as={BiHistory} />
          <BottomNavigationLabel>History</BottomNavigationLabel>
        </BottomNavigationItem>

        <BottomNavigationItem value="/profile">
          <BottomNavigationIcon as={CgProfile} />
          <BottomNavigationLabel>Profile</BottomNavigationLabel>
        </BottomNavigationItem>
      </BottomNavigation>
    );
  };