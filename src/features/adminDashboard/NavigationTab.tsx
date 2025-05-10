import { Dispatch, SetStateAction } from 'react';

export default function NavigationTab({
  setCurrentTab,
  currentTab,
}: {
  setCurrentTab: Dispatch<SetStateAction<string>>;
  currentTab: string;
}) {
  return (
    <div>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
        <li className="me-2">
          <div
            onClick={() => setCurrentTab('bookingReport')}
            aria-current="page"
            className={`${
              currentTab === 'bookingReport' ? ' text-blue-600 bg-gray-100' : ''
            }inline-block p-4 rounded-t-lg active cursor-pointer`}
          >
            Booking Report
          </div>
        </li>

        <li className="me-2">
          <div
            onClick={() => setCurrentTab('addShuttle')}
            className={`${
              currentTab === 'addShuttle' ? ' text-blue-600 bg-gray-100' : ''
            }inline-block p-4 rounded-t-lg active cursor-pointer`}
          >
            Add Path
          </div>
        </li>
      </ul>
    </div>
  );
}
