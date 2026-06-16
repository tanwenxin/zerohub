import { useState, type FormEvent } from 'react';
import { Button, Input } from './ui';
import type { PromptTemplatePagination as Pagination } from '../api/client';
import { usePreferences } from '../usePreferences';

interface PromptTemplatePaginationProps {
  pagination: Pagination;
  onPageChange: (page: number) => void;
}

function visiblePages(current: number, total: number): number[] {
  const start = Math.max(1, current - 2);
  const end = Math.min(total, current + 2);
  const pages: number[] = [];
  for (let page = start; page <= end; page += 1) pages.push(page);
  return pages;
}

export function PromptTemplatePagination({ pagination, onPageChange }: PromptTemplatePaginationProps) {
  const { language } = usePreferences();
  const en = language === 'en';
  const [jumpPage, setJumpPage] = useState(String(pagination.page));
  const pages = visiblePages(pagination.page, pagination.totalPages);

  function submitJump(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = Number.parseInt(jumpPage, 10);
    if (!Number.isFinite(next)) return;
    onPageChange(Math.min(pagination.totalPages, Math.max(1, next)));
  }

  if (pagination.totalPages <= 1) return null;

  return (
    <nav className="prompt-template-pagination" aria-label={en ? 'Prompt pagination' : '提示词分页'}>
      <Button
        size="sm"
        variant="ghost"
        disabled={!pagination.hasPrev}
        onClick={() => onPageChange(pagination.page - 1)}
      >
        {en ? 'Previous' : '上一页'}
      </Button>
      <div className="prompt-template-page-numbers">
        {pages[0] > 1 ? (
          <Button size="sm" variant="ghost" onClick={() => onPageChange(1)}>
            1
          </Button>
        ) : null}
        {pages[0] > 2 ? <span>…</span> : null}
        {pages.map((page) => (
          <Button
            key={page}
            size="sm"
            variant={page === pagination.page ? 'primary' : 'ghost'}
            onClick={() => onPageChange(page)}
            aria-current={page === pagination.page ? 'page' : undefined}
          >
            {page}
          </Button>
        ))}
        {pages[pages.length - 1] < pagination.totalPages - 1 ? <span>…</span> : null}
        {pages[pages.length - 1] < pagination.totalPages ? (
          <Button size="sm" variant="ghost" onClick={() => onPageChange(pagination.totalPages)}>
            {pagination.totalPages}
          </Button>
        ) : null}
      </div>
      <Button
        size="sm"
        variant="ghost"
        disabled={!pagination.hasNext}
        onClick={() => onPageChange(pagination.page + 1)}
      >
        {en ? 'Next' : '下一页'}
      </Button>
      <form className="prompt-template-page-jump" onSubmit={submitJump}>
        <Input
          value={jumpPage}
          inputMode="numeric"
          aria-label={en ? 'Jump to page' : '跳转页码'}
          onChange={(event) => setJumpPage(event.target.value)}
        />
        <Button size="sm" type="submit">
          {en ? 'Jump' : '跳转'}
        </Button>
      </form>
    </nav>
  );
}
