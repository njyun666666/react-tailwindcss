import { useState } from 'react';
import { Button, ButtonState } from '../../components';
import Page from '../Page';
// import Checkbox from '../../components/checkbox/Checkbox';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ButtonPage = () => {
  const [btnState, setBtnState] = useState<ButtonState>();

  // const changeLoading = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.currentTarget.checked) {
  //     setBtnState('loading');
  //   }
  // };

  const setState = async (state: ButtonState) => {
    setBtnState('loading');

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });

    setBtnState(state);
  };

  return (
    <Page title="Button">
      <h1>Button</h1>

      <div className="space-x-3">
        {/* <Checkbox id="chbLoading" onChange={changeLoading} checked={btnState}>
          Loading
        </Checkbox> */}

        <Button color="success" onClick={() => setState('success')}>
          set success
        </Button>
        <Button color="error" onClick={() => setState('error')}>
          set error
        </Button>
      </div>

      <h2>Fill</h2>
      <div className="space-x-3 space-y-3">
        <Button color="primary" state={btnState} setState={setBtnState}>
          primary
        </Button>
        <Button color="secondary" state={btnState} setState={setBtnState}>
          secondary
        </Button>
        <Button color="success" state={btnState} setState={setBtnState}>
          success
        </Button>
        <Button color="error" state={btnState} setState={setBtnState}>
          error
        </Button>
        <Button color="info" state={btnState} setState={setBtnState}>
          info
        </Button>
        <Button color="warning" state={btnState} setState={setBtnState}>
          warning
        </Button>
        <Button color="basic" state={btnState} setState={setBtnState}>
          basic
        </Button>
        <Button color="transparent" state={btnState} setState={setBtnState}>
          transparent
        </Button>
      </div>

      <h2>outline</h2>
      <div className="space-x-3 space-y-3">
        <Button color="primary" outline state={btnState} setState={setBtnState}>
          primary
        </Button>
        <Button color="secondary" outline state={btnState} setState={setBtnState}>
          secondary
        </Button>
        <Button color="success" outline state={btnState} setState={setBtnState}>
          success
        </Button>
        <Button color="error" outline state={btnState} setState={setBtnState}>
          error
        </Button>
        <Button color="info" outline state={btnState} setState={setBtnState}>
          info
        </Button>
        <Button color="warning" outline state={btnState} setState={setBtnState}>
          warning
        </Button>
        <Button color="basic" outline state={btnState} setState={setBtnState}>
          basic
        </Button>
      </div>

      <h2>Icon</h2>
      <div className="space-x-3 space-y-3">
        <Button color="primary" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}>
          primary
        </Button>
        <Button color="secondary" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}>
          secondary
        </Button>
        <Button color="success" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}>
          success
        </Button>
        <Button color="error" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}>
          error
        </Button>
        <Button color="info" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}>
          info
        </Button>
        <Button color="warning" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}>
          warning
        </Button>
        <Button color="basic" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}>
          basic
        </Button>
        <Button color="transparent" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}>
          transparent
        </Button>
      </div>

      <h2>Only Icon</h2>
      <div className="space-x-3 space-y-3">
        <Button color="primary" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}></Button>
        <Button color="secondary" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}></Button>
        <Button color="success" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}></Button>
        <Button color="error" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}></Button>
        <Button color="info" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}></Button>
        <Button color="warning" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}></Button>
        <Button color="basic" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}></Button>
        <Button color="transparent" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}></Button>
      </div>

      <h2>Disabled</h2>
      <div className="space-x-3 space-y-3">
        <Button disabled color="primary" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}>
          primary
        </Button>
        <Button disabled color="secondary" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}>
          secondary
        </Button>
        <Button disabled color="success" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}>
          success
        </Button>
        <Button disabled color="error" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}>
          error
        </Button>
        <Button disabled color="info" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}>
          info
        </Button>
        <Button disabled color="warning" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}>
          warning
        </Button>
        <Button disabled color="basic" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}>
          basic
        </Button>
        <Button disabled color="transparent" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState}>
          transparent
        </Button>
      </div>
      <div className="space-x-3 space-y-3">
        <Button disabled color="primary" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState} outline>
          primary
        </Button>
        <Button disabled color="secondary" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState} outline>
          secondary
        </Button>
        <Button disabled color="success" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState} outline>
          success
        </Button>
        <Button disabled color="error" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState} outline>
          error
        </Button>
        <Button disabled color="info" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState} outline>
          info
        </Button>
        <Button disabled color="warning" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState} outline>
          warning
        </Button>
        <Button disabled color="basic" iconProps={{ icon: faStar }} state={btnState} setState={setBtnState} outline>
          basic
        </Button>
      </div>
    </Page>
  );
};
export default ButtonPage;
