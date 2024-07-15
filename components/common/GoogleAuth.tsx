'use client';

import { useSocialAuth } from '@/hooks';
import React from 'react'
import Spinner from './Spinner';
import { useSocialAuthenticateMutation } from '@/redux/features/authApiSlice';

export default function GoogleAuth() {
    const [googleAuthenticate] = useSocialAuthenticateMutation();
	useSocialAuth(googleAuthenticate, 'google-oauth2');
	return (
		<div className='my-8'>
			<Spinner lg />
		</div>
	);
}
