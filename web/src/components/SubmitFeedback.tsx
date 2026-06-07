interface Props {
  visible: boolean;
  message: string;
}

export function SubmitFeedback({ visible, message }: Props) {
  return (
    <div className={`submit-feedback ${visible ? 'show' : ''}`} role="status" aria-live="polite">
      <span className="submit-feedback-dot" aria-hidden="true" />
      <span>{message}</span>
    </div>
  );
}
