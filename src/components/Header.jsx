import styles from "./Header.module.css";
import LogoutIcon from '@mui/icons-material/Logout';

export const Header = () => {
    return (
    <div className={styles.container}>
      <div>
        <a><img src="logo.png" alt="logo"/>Technological University of the Philippines - Cavite</a>
      </div>
      <div>
        <button className={styles.primary}>Logout &nbsp;<LogoutIcon sx={{ fontSize: 20
        }} /></button>
      </div>
    </div>
    )
}