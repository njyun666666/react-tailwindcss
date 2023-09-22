import { useState } from 'react';
import { Button } from '../../components';
import Page from '../Page';
import Checkbox from '../../components/checkbox/Checkbox';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ButtonPage = () => {
  const [loading, setLoading] = useState(false);

  const changeLoading = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(event.currentTarget.checked);
  };

  return (
    <Page title="Button">
      <h1>Button</h1>

      <div>
        <Checkbox id="chbLoading" onChange={changeLoading} checked={loading}>
          Loading
        </Checkbox>
      </div>

      <h2>Fill</h2>
      <div className="space-x-3 space-y-3">
        <Button color="primary" loading={loading}>
          primary
        </Button>
        <Button color="secondary" loading={loading}>
          secondary
        </Button>
        <Button color="success" loading={loading}>
          success
        </Button>
        <Button color="error" loading={loading}>
          error
        </Button>
        <Button color="info" loading={loading}>
          info
        </Button>
        <Button color="warning" loading={loading}>
          warning
        </Button>
        <Button color="basic" loading={loading}>
          basic
        </Button>
        <Button color="transparent" loading={loading}>
          transparent
        </Button>
      </div>

      <h2>outline</h2>
      <div className="space-x-3 space-y-3">
        <Button color="primary" outline loading={loading}>
          primary
        </Button>
        <Button color="secondary" outline loading={loading}>
          secondary
        </Button>
        <Button color="success" outline loading={loading}>
          success
        </Button>
        <Button color="error" outline loading={loading}>
          error
        </Button>
        <Button color="info" outline loading={loading}>
          info
        </Button>
        <Button color="warning" outline loading={loading}>
          warning
        </Button>
        <Button color="basic" outline loading={loading}>
          basic
        </Button>
      </div>

      <h2>Icon</h2>
      <div className="space-x-3 space-y-3">
        <Button color="primary" iconProps={{ icon: faStar }} loading={loading}>
          primary
        </Button>
        <Button color="secondary" iconProps={{ icon: faStar }} loading={loading}>
          secondary
        </Button>
        <Button color="success" iconProps={{ icon: faStar }} loading={loading}>
          success
        </Button>
        <Button color="error" iconProps={{ icon: faStar }} loading={loading}>
          error
        </Button>
        <Button color="info" iconProps={{ icon: faStar }} loading={loading}>
          info
        </Button>
        <Button color="warning" iconProps={{ icon: faStar }} loading={loading}>
          warning
        </Button>
        <Button color="basic" iconProps={{ icon: faStar }} loading={loading}>
          basic
        </Button>
        <Button color="transparent" iconProps={{ icon: faStar }} loading={loading}>
          transparent
        </Button>
      </div>

      <h2>Only Icon</h2>
      <div className="space-x-3 space-y-3">
        <Button color="primary" iconProps={{ icon: faStar }} loading={loading}></Button>
        <Button color="secondary" iconProps={{ icon: faStar }} loading={loading}></Button>
        <Button color="success" iconProps={{ icon: faStar }} loading={loading}></Button>
        <Button color="error" iconProps={{ icon: faStar }} loading={loading}></Button>
        <Button color="info" iconProps={{ icon: faStar }} loading={loading}></Button>
        <Button color="warning" iconProps={{ icon: faStar }} loading={loading}></Button>
        <Button color="basic" iconProps={{ icon: faStar }} loading={loading}></Button>
        <Button color="transparent" iconProps={{ icon: faStar }} loading={loading}></Button>
      </div>

      <h2>Disabled</h2>
      <div className="space-x-3 space-y-3">
        <Button disabled color="primary" iconProps={{ icon: faStar }} loading={loading}>
          primary
        </Button>
        <Button disabled color="secondary" iconProps={{ icon: faStar }} loading={loading}>
          secondary
        </Button>
        <Button disabled color="success" iconProps={{ icon: faStar }} loading={loading}>
          success
        </Button>
        <Button disabled color="error" iconProps={{ icon: faStar }} loading={loading}>
          error
        </Button>
        <Button disabled color="info" iconProps={{ icon: faStar }} loading={loading}>
          info
        </Button>
        <Button disabled color="warning" iconProps={{ icon: faStar }} loading={loading}>
          warning
        </Button>
        <Button disabled color="basic" iconProps={{ icon: faStar }} loading={loading}>
          basic
        </Button>
        <Button disabled color="transparent" iconProps={{ icon: faStar }} loading={loading}>
          transparent
        </Button>
      </div>
      <div className="space-x-3 space-y-3">
        <Button disabled color="primary" iconProps={{ icon: faStar }} loading={loading} outline>
          primary
        </Button>
        <Button disabled color="secondary" iconProps={{ icon: faStar }} loading={loading} outline>
          secondary
        </Button>
        <Button disabled color="success" iconProps={{ icon: faStar }} loading={loading} outline>
          success
        </Button>
        <Button disabled color="error" iconProps={{ icon: faStar }} loading={loading} outline>
          error
        </Button>
        <Button disabled color="info" iconProps={{ icon: faStar }} loading={loading} outline>
          info
        </Button>
        <Button disabled color="warning" iconProps={{ icon: faStar }} loading={loading} outline>
          warning
        </Button>
        <Button disabled color="basic" iconProps={{ icon: faStar }} loading={loading} outline>
          basic
        </Button>
      </div>
    </Page>
  );
};
export default ButtonPage;
