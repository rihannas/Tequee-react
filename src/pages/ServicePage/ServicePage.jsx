import Service from '../../components/Service/Service';
import useFetchData from '../../hooks/useFetchData';
import styles from './ServicePage.module.scss';

const ServicePage = () => {
  const { data, error, isLoading } = useFetchData(
    'services',
    'http://127.0.0.1:8000/api/services/'
  );

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.service_container}>
      {data && data.length > 0 ? (
        data.map((prop) => (
          <Service
            key={prop.id}
            props={prop}
          />
        ))
      ) : (
        <div>No services available</div>
      )}
    </div>
  );
};

export default ServicePage;
