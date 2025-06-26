import styles from '@/styles/Filters.module.css'
import {  ChangeEvent } from 'react'
type Props = {
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    allRegions: string[];
    inputValue: string;
    selectValue: string;
}
export default function Filters({handleInputChange, handleSelectChange, allRegions, inputValue, selectValue}: Props){
    return (
        <div className={styles.filters}>
            <input 
             type="text"
             placeholder='Search country by name'
             value={inputValue}
             onChange={handleInputChange}
             className={styles.input}
             />
            <select value={selectValue} onChange={handleSelectChange} className={styles.select}>
                <option value="">All regions</option>
                {allRegions.map(region => (
                    <option key={region} value={region}>
                        {region}
                    </option>
                ))}
            </select>
        </div>
    )
}