import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>

            <div className={s.img1}>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
            </div>
            <div className={s.ava}>
                <img
                    src="https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg"/>

            <div className={s.description}>
                <div>
                    <h3>17.10.1999</h3>
                    <h3>Beautiful life</h3>
                    <h3>Armenia, Yerevan</h3>
                    <h3>IT Programmer</h3>

                </div>
            </div>
            </div>

        </div>
    );
}

export default ProfileInfo;
