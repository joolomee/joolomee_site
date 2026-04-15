'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUIZ, SITE } from '@/lib/data';
import { useLocale } from './LocaleProvider';

type QType = 'A' | 'B' | 'C' | 'D';

export default function Quiz() {
  const { t } = useLocale();
  const [step, setStep] = useState(-1); // -1 = intro, 0..4 = questions, 5 = result
  const [answers, setAnswers] = useState<QType[]>([]);

  const total = QUIZ.questions.length;

  const reset = () => { setStep(-1); setAnswers([]); };

  const pick = (type: QType) => {
    const next = [...answers, type];
    setAnswers(next);
    if (next.length === total) setStep(total);
    else setStep(step + 1);
  };

  const back = () => {
    if (step === 0) { setStep(-1); return; }
    setAnswers(answers.slice(0, -1));
    setStep(step - 1);
  };

  const dominant = (): QType => {
    const tally: Record<QType, number> = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach((a) => { tally[a]++; });
    return (Object.entries(tally).sort((a, b) => b[1] - a[1])[0][0]) as QType;
  };

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="min-h-[100svh] pt-28 md:pt-32 pb-28 bg-bg-secondary">
      <div className="container-site max-w-4xl">
        <AnimatePresence mode="wait">
          {step === -1 && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease }}
            >
              <p className="mono text-[11px] uppercase tracking-[0.28em] text-accent mb-6">— {t('quizLabel')}</p>
              <h1 className="display text-[12vw] md:text-[7vw] leading-[0.92] tracking-ultra-tight text-text-primary">
                {t('quizTitle')}
              </h1>
              <p className="text-text-secondary text-lg md:text-xl mt-8 max-w-xl leading-relaxed">
                {t('quizSub')}
              </p>
              <button onClick={() => setStep(0)} className="btn-primary mt-12 text-base">
                {t('quizStart')} <span aria-hidden>→</span>
              </button>
            </motion.div>
          )}

          {step >= 0 && step < total && (
            <motion.div
              key={`q-${step}`}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease }}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="mono text-[11px] tracking-[0.22em] text-text-muted">
                  {String(step + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </span>
                <div className="flex-1 mx-6 h-px bg-line relative">
                  <div
                    className="absolute top-0 left-0 h-px bg-accent transition-all duration-500"
                    style={{ width: `${((step + 1) / total) * 100}%` }}
                  />
                </div>
                <button onClick={back} className="mono text-[11px] tracking-[0.22em] text-text-secondary link-underline">
                  ← {t('quizBack')}
                </button>
              </div>

              <h2 className="display text-[8vw] md:text-[3.6vw] leading-[1.05] tracking-[-0.03em] text-text-primary mb-10">
                {t(QUIZ.questions[step].key)}
              </h2>

              <ul className="grid md:grid-cols-2 gap-3">
                {QUIZ.questions[step].options.map((opt) => (
                  <li key={opt.key}>
                    <button
                      onClick={() => pick(opt.type as QType)}
                      className="w-full text-left bg-white/70 backdrop-blur-sm border border-line rounded-2xl p-6 hover:border-accent hover:bg-white transition-all group"
                    >
                      <span className="mono text-[10px] tracking-[0.22em] text-accent block mb-2">
                        {opt.type}
                      </span>
                      <span className="display text-xl md:text-2xl leading-tight tracking-[-0.01em] text-text-primary group-hover:translate-x-1 transition-transform inline-block">
                        {t(opt.key)}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {step === total && (() => {
            const r = dominant();
            return (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease }}
              >
                <p className="mono text-[11px] uppercase tracking-[0.28em] text-accent mb-6">— {t('quizResult')}</p>
                <h1 className="display text-[18vw] md:text-[11vw] leading-[0.85] tracking-ultra-tight text-text-primary">
                  <span className="italic text-text-secondary font-normal">{t(`result${r}`)}.</span>
                </h1>
                <p className="text-text-secondary text-lg md:text-xl mt-10 max-w-2xl leading-relaxed">
                  {t(`result${r}d`)}
                </p>
                <div className="mt-14 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${SITE.email}?subject=${encodeURIComponent(`Quiz result: ${t(`result${r}`)}`)}`}
                    className="btn-primary"
                  >
                    {t('resultCta')} <span aria-hidden>→</span>
                  </a>
                  <button onClick={reset} className="btn-ghost">
                    {t('quizRestart')} <span aria-hidden>↻</span>
                  </button>
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>
    </section>
  );
}
