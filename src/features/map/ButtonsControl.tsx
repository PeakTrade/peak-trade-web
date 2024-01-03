import { ButtonControl } from '@/components/ButtonControl';

const ButtonsControl = () => {
  return (
    <>
      <ButtonControl
        handler={() => {
          console.log('Clicked');
        }}
      />
    </>
  );
};

export default ButtonsControl;
