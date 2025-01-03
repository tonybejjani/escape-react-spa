/** @format */

import Spinner from '../../ui/Spinner';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import useSettings from './useSettings';
import useUpdateSettings from './useUpdateSetting';

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      breakfastPrice,
      maxBookingLength,
      maxGuestsPerBooking,
      minBookingLength,
    } = {},
  } = useSettings();

  const { isUpdating, updateSetting } = useUpdateSettings();

  // const { register, handleSubmit, getValues } = useForm({
  //   defaultValues: { ...settings },
  // });

  if (isLoading) return <Spinner />;

  function handleUpdate(e, field) {
    const { value } = e.target;

    if (!value) return;

    updateSetting({ [field]: value });
    console.log(value);
  }
  return (
    <Form>
      <FormRow label="Minimum nights/booking" id="minBookingLength">
        <Input
          type="number"
          id="minBookingLength"
          defaultValue={minBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, 'minBookingLength')}

          // disabled={isWorking}
          // {...register('minBookingLength', {
          //   required: 'This field is required.',
          //   min: {
          //     value: 1,
          //     message: 'Minimum stay be at least 1 day.',
          //   },
          // })}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking" id="maxBookingLength">
        <Input
          type="number"
          id="maxBookingLength"
          defaultValue={maxBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, 'maxBookingLength')}
          // {...register('maxBookingLength', {
          //   required: 'This field is required.',
          //   min: {
          //     value: 1,
          //     message: 'Maximum stay be at least 1 day.',
          //   },
          //   validate: (value) =>
          //     +value >= +getValues().minBookingLength ||
          //     'Maximum stay should be longer then minimum stay.',
          // })}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking" id="maxGuestsPerBooking">
        <Input
          type="number"
          id="maxGuestsPerBooking"
          defaultValue={maxGuestsPerBooking}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, 'maxGuestsPerBooking')}
          // {...register('maxGuestsPerBooking', {
          //   required: 'This field is required.',
          //   min: {
          //     value: 1,
          //     message: 'Maximum guests should be at least 1.',
          //   },
          // })}
        />
      </FormRow>
      <FormRow label="Breakfast price" id="breakfastPrice">
        <Input
          type="number"
          id="breakfastPrice"
          defaultValue={breakfastPrice}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, 'breakfastPrice')}
          // {...register('breakfastPrice', {
          //   required: 'This field is required.',
          //   min: {
          //     value: 1,
          //     message: 'Breakfast price should at least 1.',
          //   },
          // })}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
