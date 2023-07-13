import { Button } from '../../components';
import Page from '../Page';

const ButtonPage = () => {
  return (
    <Page title="Button">
      <h1>Button</h1>

      <h2>Fill</h2>
      <div className="space-x-3 space-y-3">
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="success">success</Button>
        <Button color="error">error</Button>
        <Button color="info">info</Button>
        <Button color="warning">warning</Button>
        <Button color="basic">basic</Button>
        <Button color="transparent">transparent</Button>
      </div>

      <h2>outline</h2>
      <div className="space-x-3 space-y-3">
        <Button color="primary" outline>
          primary
        </Button>
        <Button color="secondary" outline>
          secondary
        </Button>
        <Button color="success" outline>
          success
        </Button>
        <Button color="error" outline>
          error
        </Button>
        <Button color="info" outline>
          info
        </Button>
        <Button color="warning" outline>
          warning
        </Button>
        <Button color="basic" outline>
          basic
        </Button>
        <Button color="transparent" outline>
          transparent
        </Button>
      </div>

      <h2>Icon</h2>
      <div className="space-x-3 space-y-3">
        <Button color="primary" icon={'star'}>
          primary
        </Button>
        <Button color="secondary" icon={'star'}>
          secondary
        </Button>
        <Button color="success" icon={'star'}>
          success
        </Button>
        <Button color="error" icon={'star'}>
          error
        </Button>
        <Button color="info" icon={'star'}>
          info
        </Button>
        <Button color="warning" icon={'star'}>
          warning
        </Button>
        <Button color="basic" icon={'star'}>
          basic
        </Button>
        <Button color="transparent" icon={'star'}>
          transparent
        </Button>
      </div>

      <h2>Only Icon</h2>
      <div className="space-x-3 space-y-3">
        <Button color="primary" icon={'star'}></Button>
        <Button color="secondary" icon={'star'}></Button>
        <Button color="success" icon={'star'}></Button>
        <Button color="error" icon={'star'}></Button>
        <Button color="info" icon={'star'}></Button>
        <Button color="warning" icon={'star'}></Button>
        <Button color="basic" icon={'star'}></Button>
        <Button color="transparent" icon={'star'}></Button>
      </div>

      <h2>Disabled</h2>
      <div className="space-x-3 space-y-3">
        <Button disabled color="primary" icon={'star'}>
          primary
        </Button>
        <Button disabled color="secondary" icon={'star'}>
          secondary
        </Button>
        <Button disabled color="success" icon={'star'}>
          success
        </Button>
        <Button disabled color="error" icon={'star'}>
          error
        </Button>
        <Button disabled color="info" icon={'star'}>
          info
        </Button>
        <Button disabled color="warning" icon={'star'}>
          warning
        </Button>
        <Button disabled color="basic" icon={'star'}>
          basic
        </Button>
        <Button disabled color="transparent" icon={'star'}>
          transparent
        </Button>
      </div>
    </Page>
  );
};
export default ButtonPage;
