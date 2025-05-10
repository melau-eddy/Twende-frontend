import { useMutation, useQuery } from '@tanstack/react-query';
import InputField from '../../components/InputField';
import { getshuttles } from '../../services/shuttleService';
import DropDownSelect from '../../components/DropDownSelect';
import { useForm } from 'react-hook-form';

import { AddTravelRoute, addTravelRoute } from '../../services/travelRoutesservice';
import { toast } from 'react-toastify';

export default function AddPath() {
  const { register, handleSubmit, setValue, getValues } = useForm<AddTravelRoute>();

  const { data: shuttlesObject } = useQuery({
    queryKey: ['shuttles'],
    queryFn: () => getshuttles(),
  });

  const { mutate: addRoute } = useMutation({
    mutationFn: (data: AddTravelRoute) => addTravelRoute(data),
    onSuccess: () => toast.success('path succesfully added'),
    onError: () => toast.error('Path not added, please try again'),
  });

  const shuttles = shuttlesObject?.data;

  const shuttleData = shuttles?.map((shuttle) => ({
    id: shuttle._id,
    value: shuttle.numberPlate,
  }));

  const handleSelectedRoute = (id: string) => {
    setValue('shuttleId', id);
  };

  const onSubmit = () => {
    const data = getValues();
    addRoute(data);
  };

  return (
    <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" action="">
        <DropDownSelect
          data={shuttleData ?? []}
          text="Select Shuttle"
          buttonClassName="mb-5"
          handleShuttle={handleSelectedRoute}
        />
        <InputField label="From" type="text" id="from" register={register('from')} />
        <InputField label="destination" type="text" id="destination" register={register('destination')} />
        <InputField label="Transportation Cost" type="number" id="farePrice" register={register('farePrice')} />
        <InputField label="Travel Date" type="text" id="travelDate" register={register('travelDate')} />

        <button
          type="submit"
          className={`py-2 w-fit self-end px-4 rounded-md focus:ring-2 bg-cyan-500 hover:bg-cyan-800 h-fit text-white focus:ring-cyan-300 active:bg-cyan-800`}
        >
          Add Route
        </button>
      </form>
    </div>
  );
}
