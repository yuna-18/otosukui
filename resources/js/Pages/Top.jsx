import React from 'react';
import {Head, usePage} from '@inertiajs/react';
import Header from '@/Components/Header';
import GoogleCSE from '@/Components/SearchAPI';

const Top = ({authUser, canLogin, canRegister}) => {
  const isLoggedIn = Boolean(authUser);
  const {flash} = usePage().props;

  return (
    <div className='bg-[var(--color-background)]'>
      <Head title="音すくい | トップページ" />
      <Header authUser={authUser} />
      <main className="pt-[148px] px-4 md:px-8 text-[var(--color-text-primary)]">
        {flash?.message && (
          <div className="bg-green-100 text-green-800 p-4 rounded mb-4">
            {flash.message}
          </div>
        )}

        <div className="">
          <p className="font-bold text-xl/[1.5]">音楽カテゴリ・楽器を入力して、<br className="sp" />イベントや演奏会情報を検索しよう!</p>
          <p className='font-normal text-base/[1.7] mt-8px'>検索結果をタブ毎に絞り込むことができます。</p>
        </div>
        {/* hack 検索エンジンの背景だけ変えた。検索結果展開前の背景色をどう塗りつぶすか考える。 */}
        <GoogleCSE />
      </main>
    </div>
  );
};

export default Top;
