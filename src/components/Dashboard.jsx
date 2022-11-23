import styles from "./Dashboard.module.css";
import SearchIcon from '@mui/icons-material/Search';


export const Dashboard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <input className={styles.input} type="text"></input>
                <button className={styles.icon}><SearchIcon sx={{ fontSize: 20}} /></button>
            </div>
            <div>
                <button className={styles.secondary}>Transcribe</button>
            </div>
        </div>

    )
}
