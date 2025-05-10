import { useState } from 'react';

import BookingResport from '../features/adminDashboard/BookingResport';
import NavigationTab from '../features/adminDashboard/NavigationTab';
import AddPath from '../features/adminDashboard/AddPath';

export default function AdminPage() {
  const [currentTab, setCurrentTab] = useState<string>('bookingReport');
  return (
    <div className=" p-6 min-h-screen">
      <NavigationTab setCurrentTab={setCurrentTab} currentTab={currentTab} />

      <div className="mt-10">
        {currentTab === 'bookingReport' && <BookingResport />}
        {currentTab === 'addShuttle' && <AddPath />}
      </div>
    </div>
  );
}
