import ServiceDetails from '../../components/ServiceDetails/ServiceDetails';
import { useParams } from 'react-router-dom';
import useServicesQuery from '../../hooks/useServicesQuery';

function ServiceDetailPage() {
  const { id } = useParams();
  const { data, error, isLoading } = useServicesQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!data) return <div>Service not found</div>;

  return (
    <div>
      <ServiceDetails service={data} />
    </div>
  );
}

export default ServiceDetailPage;
