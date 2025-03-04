import React from 'react';

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await res.json();

  return {
    props: { user },
  };
}

const UserDetail = ({ user }) => {
  return (
    <div>
      <h1>Detail Pengguna</h1>
      <p><strong>Nama:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Alamat:</strong> {user.address.street}, {user.address.city}</p>
    </div>
  );
};

export default UserDetail;
