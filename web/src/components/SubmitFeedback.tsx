interface Props {
  visible: boolean;
  message: string;
  tone?: 'success' | 'error';
}

export function SubmitFeedback({ visible, message, tone = 'success' }: Props) {
  return (
    <div
      className={`submit-feedback ${tone} ${visible ? 'show' : ''}`}
      role="status"
      aria-live="polite"
    >
      <span className="submit-feedback-dot" aria-hidden="true" />
      <span>{message}</span>
    </div>
  );
}
