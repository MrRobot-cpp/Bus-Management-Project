import styles from "./TermsAndConditions.module.css"
import React , {useState} from 'react';


function TermsAndConditions(props) {
    const {onQuery,onQueryII} = props
    const [inputValue, setInputValue] = useState(false);

    const handleChange = (event) => {
        setInputValue(event.target.value);
        handleOnQuery()
    };

    const handleOnQuery = () => {
            onQuery(!inputValue);
            onQueryII(inputValue);

    }
    return (
        <div className={styles["overlay"]}>
          <div className={styles["terms-container"]}>
            <div className={styles["terms"]}>
            <h2>Terms & Conditions</h2>
             <h3>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Adipisci repellendus 
                eveniet incidunt placeat pariatur. Assumenda 
                quaerat fuga alias vero delectus asperiores 
                distinctio totam commodi! Ad voluptatum 
                quaerat accusantium veritatis! Consequuntur 
                Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Ut, amet! Quae numquam
                 suscipit odio repudiandae eum libero! 
                 Necessitatibus qui distinctio aliquid 
                 doloribus praesentium veniam aut, architecto, 
                 iusto, hic placeat tempora.</h3>
                 <h5><input className='checker' type="checkbox" checked={inputValue} onChange={handleChange}/> I Agree</h5>

            </div>
          </div>
        </div>
    )
}

export default TermsAndConditions
