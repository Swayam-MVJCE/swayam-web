'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import {
  allParticipantCheckin,
  participantCheckin,
  singleParticipantCheckin,
} from '@/app/actions/participantCheckin';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { set } from 'zod';
import { cn } from '@/utils/cn';

const ParticipantCheckInButton = ({
  registration,
  participant,
  singleCheckIn = false,
  all = false,
  participantsArray,
  className = '',
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleCheckInBtnClick() {
    if (isLoading) return;
    setIsLoading(true);
    const response = await participantCheckin(registration.id, participant.id);
    if (response.error) {
      toast.error(response.error);
    } else {
      setSuccess(true);
      toast.success('Participant Checked-In successfully', {
        autoClose: 800,
      });
    }
    setIsLoading(false);
    setIsDialogOpen(false);
  }

  async function handleSingleCheckInBtnClick() {
    if (isLoading) return;
    setIsLoading(true);
    const response = await singleParticipantCheckin(registration.id);
    if (response.error) {
      toast.error(response.error);
    } else {
      setSuccess(true);
      toast.success('Participant Checked-In successfully', {
        autoClose: 800,
      });
    }
    setIsLoading(false);
    setIsDialogOpen(false);
  }
  async function handleAllCheckInBtnClick() {
    if (isLoading || !participantsArray) return;
    setIsLoading(true);
    const response = await allParticipantCheckin(
      registration.id,
      participantsArray
    );
    if (response.error) {
      toast.error(response.error);
    } else {
      setSuccess(true);
      toast.success('All Participants Checked-In successfully', {
        autoClose: 800,
      });
    }
    setIsLoading(false);
    setIsDialogOpen(false);
  }

  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={() => setIsDialogOpen(!isDialogOpen)}
    >
      <DialogTrigger className="w-full" onClick={() => setIsDialogOpen(true)}>
        {success ? (
          <span className="text-xs text-green-600 font-semibold w-max flex flex-col">
            <span>Loading</span>
          </span>
        ) : (
          <Button className={cn('px-3 w-full', className)} variant="default">
            {isLoading
              ? 'Checking In...'
              : all
              ? 'Check-In All Participants'
              : 'Check-In'}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="my-4">
        <DialogHeader>
          <DialogTitle>
            Are you sure you want to Check-in{' '}
            {all ? 'All Participants' : 'this Participant'}
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="flex flex-col gap-4">
          <DialogClose asChild>
            <Button type="button" variant="destructive">
              Cancel
            </Button>
          </DialogClose>
          <Button
            disabled={isLoading}
            onClick={
              singleCheckIn
                ? handleSingleCheckInBtnClick
                : all
                ? handleAllCheckInBtnClick
                : handleCheckInBtnClick
            }
          >
            {isLoading ? 'Checking In...' : 'Check-In'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ParticipantCheckInButton;
