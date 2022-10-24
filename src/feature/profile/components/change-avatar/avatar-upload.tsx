import Add from "@mui/icons-material/Add";
import { Dialog, Avatar, Container, DialogContent, Box } from "@mui/material"
import { makeStyles } from "@mui/styles";
import { useState } from "react"
import { useTranslation } from "react-i18next";
import { AppBar } from "../../../../components/appbar/appbar";
import { Back } from "../../../../components/appbar/back";
import { AvatarEdit } from "../../../../components/avatar-edit/avatar-edit";
import { useAuth } from "../../../../components/context/auth";
// import { useImagesUser } from "../../../../components/context/images";
import { useCreateImageS3Mutation, useUpdateUserInfoMutation } from "../../../../components/generated/graphql";

const SIZE_AVATAR = 60;

const useStyles = makeStyles({
	wrap: {
		cursor: 'pointer',
		display: 'inline-block',
		border: '3px solid #eee',
		borderRadius: '100%',
		position: 'relative',
		margin: 'auto',

		'&:hover': {
			borderColor: '#eee',
		},
	},
	avatar: {
		height: SIZE_AVATAR,
		width: SIZE_AVATAR,
		margin: 1,
		background: '#eee',
		color: '#333'
	},

})

export interface IFileUpload {
	url: string;
	key: string;
}



const AvatarUpload = () => {
	const { t } = useTranslation('editAvatar');
	const { user, updateInfo } = useAuth();
	// const { addImage } = useImagesUser();
	const [open, setOpen] = useState<boolean>(false);
	const classes = useStyles()
	const [createImageS3, { loading }] = useCreateImageS3Mutation();

	const [updateUserInfo] = useUpdateUserInfoMutation({
		onCompleted(data) {
			if (data.updateUserInfo?.success) {
				updateUserInfo(data?.updateUserInfo.user as any);
			}
		},
	});



	const toggle = () => setOpen(o => !o)

	const handleUploadAvatar = async (fileUrl: IFileUpload) => {
		try {
			const response = await createImageS3({
				variables: {
					createImageS3Input: {
						...fileUrl,
						userId: user?._id as string,
					},
				},
			});

			const image: any = response.data?.createImageS3.image; // TODO: fix type
			// if (image) {
			// 	addImage(image);

			// 	updateInfo({
			// 		...user,
			// 		avatarS3: image,
			// 	});

			// 	updateUserInfo({
			// 		variables: {
			// 			updateUserInfoInput: { avatarS3: image._id },
			// 		},
			// 		// refetchQueries: [{ query: QUERY_GET_IMAGES_S3 }],
			// 	});

			// 	toggle();
			// }
		} catch (error) { }
	};



	return (
		<>
			<Box className={classes.wrap}>
				<Avatar onClick={toggle} className={classes.avatar}>
					<Add />
				</Avatar>
			</Box>

			<Dialog open={open} onClose={toggle} fullScreen>
				<AppBar
					title={t('upload_new')}
					leftContent={<Back onClick={toggle} />}
				/>

				<DialogContent>
					<Container>

						<Box pt={10}>
							<AvatarEdit upload={handleUploadAvatar}
								loading={loading}
							/>
						</Box>
					</Container>
				</DialogContent>
			</Dialog>
		</>
	)
}

export {
	AvatarUpload
}