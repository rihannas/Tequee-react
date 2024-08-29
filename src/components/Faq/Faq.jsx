import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styles from './Faq.module.scss';
const Faq = () => {
  return (
    <Accordion className={styles.faq}>
      <AccordionSummary
        className={styles.faqsummary}
        expandIcon={<ArrowDropDownIcon />}
        aria-controls='panel2-content'
        id='panel2-header'
      >
        <Typography>Accordion 2</Typography>
      </AccordionSummary>
      <AccordionDetails className={styles.faqdetails}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Faq;
