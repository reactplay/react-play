import { useState } from 'react';
import { useAuthenticationStatus, useUserData } from '@nhost/react';
import { Tags, Levels, Issues } from 'common/services';
import Button from '@mui/material/Button';

import PlayForm from 'common/components/PlayForms';
import { NHOST } from 'common/const';
import { FIELD_TEMPLATE } from './create-play-form-template';
import './create-play.scss';
import Loader from 'common/spinner/spinner';
import { Plays } from 'common/services/plays';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import useLocalStorage from 'common/hooks/useLocalStorage';
import { NhostClient, NhostReactProvider } from '@nhost/react';

const CreatePlay = () => {
	const { isAuthenticated, isLoading, error, isError } =
		useAuthenticationStatus();
	const [searchParams, setSearchParams] = useSearchParams();
	const [storedValue, setValue] = useLocalStorage();

	const userData = useUserData();
	let navigate = useNavigate();

	const [loadingText, setLoadingText] = useState('Loading form information.');
	const [storedData, setStoredData] = useState({});
	const [formData, setFormData] = useState({});
	const [isDataLoading, setIsDataLoading] = useState(false);

	const onChange = (data) => {
		setFormData({ ...data });
	};

	const isFieldsAreInValid = () => {
		let res = false;
		FIELD_TEMPLATE.forEach((tmpl) => {
			if (tmpl.required && (!formData || !formData[tmpl.datafield])) {
				res = true;
			}
		});
		return res;
	};

	const initializeData = () => {
		const all_apis = [
			{ name: 'tags', method: Tags.getAllTags },
			{ name: 'level', method: Levels.getAllLevels },
			{ name: 'issue', method: Issues.getIssues },
		];
		const promises = [];
		all_apis.forEach((api) => {
			promises.push(api.method());
		});

		Promise.all(promises)
			.then((res) => {
				res.forEach((rApi, rApi_ind) => {
					const api_obj = all_apis[rApi_ind];
					storedData[api_obj.name] = rApi;
					const anyField = FIELD_TEMPLATE.filter((field) => {
						return field.datafield === api_obj.name;
					});
					if (anyField.length) {
						anyField[0].options = rApi;
					}
				});
				setStoredData({ ...storedData });
			})
			.finally(() => {
				setIsDataLoading(false);
			});
	};

	const onSubmit = () => {
		setLoadingText('Creating play.');
		setIsDataLoading(true);
		formData.owner_user_id = userData.id;
		Plays.createPlay(formData).then((res) => {
			navigate(`/plays/created/${res}`);
			setIsDataLoading(false);
		});
	};

	if (isLoading) {
		return (
			<Loader
				title={'Loading authentication information'}
				subtitle='Please wait....'
			/>
		);
	}
	const refreshToken = searchParams.get('refreshToken');
	// setValue(refreshToken);

	if (!isAuthenticated) {
		if (refreshToken) {
			console.log(refreshToken);
		} else {
			window.location = NHOST.AUTH_URL;
			return null;
		}
	} else {
		initializeData();
	}

	if (isDataLoading) {
		<Loader title={'Loading data'} subtitle='Please wait....' />;
	}
	return (
		<div className='w-full h-full px-5 flex flex-col justify-center items-center create-plays-wrapper'>
			<div>
				<span className='title-primary'>
					Create <strong>A Play</strong>
				</span>
			</div>
			<div className='w-full h-full max-w-6xl flex bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6'>
				<div className='flex-1'>
					<form>
						<PlayForm
							fields={FIELD_TEMPLATE}
							onChange={(data) => onChange(data)}
						/>
						<div className='flex items-center justify-between'>
							<Button
								variant='contained'
								disabled={isFieldsAreInValid()}
								onClick={() => onSubmit()}>
								Create the awesome
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CreatePlay;
