import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import Button from '../landing-page/Button';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProfile() {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        setUser(user);
        const { data, error } = await supabase
          .from('profiles')
          .select('first_name, last_name')
          .eq('id', user.id)
          .single();

        if (error) {
          console.warn(error);
        } else if (data) {
          setFirstName(data.first_name || '');
          setLastName(data.last_name || '');
        }
      }
      setLoading(false);
    }

    fetchProfile();
  }, []);

  async function handleUpdate(e) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from('profiles').update({
      first_name: firstName,
      last_name: lastName,
    }).eq('id', user.id);

    if (error) {
      alert(error.message);
    } else {
      alert('Profile updated successfully!');
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert(error.message);
    } else {
      navigate('/login');
    }
    setLoading(false);
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleUpdate} className="flex flex-col gap-4 max-w-md">
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              value={user?.email || ''}
              disabled
              className="w-full border-2 border-gray-300 rounded-xl py-2 px-1 bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border-2 border-teal-700 rounded-xl py-2 px-1"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border-2 border-teal-700 rounded-xl py-2 px-1"
            />
          </div>
          <div className="flex gap-4">
            <Button text={loading ? 'Updating...' : 'Update Profile'} disabled={loading} />
            <Button text="Logout" onClick={handleLogout} disabled={loading} />
          </div>
        </form>
      )}
    </div>
  );
}
