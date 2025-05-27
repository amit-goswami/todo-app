import { useTranslation, Trans } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();

  const count = 3;

  return (
    <div>
      <p>{t('title', { name: 'John' })}</p>
      <p>{t('description.part1')}</p>
      <p>{t('description.part2')}</p>
      <Trans i18nKey="userMessagesUnread" count={count}>
        You have {{ count }} unread message.
      </Trans>
    </div>
  );
};

export default Login;
