import Notification from '@/app/components/common/Notification';
import Dropdown from '@/app/components/common/Dropdown';
import Testimonials from '@/app/components/event/Testimonials';

export default function HomePage() {
  return (
    <>
      <div className='HomePage'>
        <Notification>
          <b>“ProfileName”</b>
          requested to join club_name/organization_name
        </Notification>

        <Dropdown
          options={[
            'Humane',
            'SocietyGlobal',
            'Giving.Impact',
            'Hub.Show',
            'Empathy.World',
            'Medical',
            'Relief.Action',
            'Institute.Angel',
            'Reach.Partners',
            'Health.',
          ]}
        >
          JOINED CLUB/ORGANIZATION
        </Dropdown>

        <Testimonials />
      </div>
    </>
  );
}
