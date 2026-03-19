import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

// Listar todas as tarefas
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await prisma.task.findMany()
    res.json(tasks)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Criar tarefa
router.post('/tasks', async (req, res) => {
  try {
    const { title } = req.body
    const task = await prisma.task.create({
      data: { title }
    })
    res.status(201).json(task)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Atualizar tarefa
router.put('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { title, done } = req.body
    const task = await prisma.task.update({
      where: { id: Number(id) },
      data: { title, done }
    })
    res.json(task)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Deletar tarefa
router.delete('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params
    await prisma.task.delete({
      where: { id: Number(id) }
    })
    res.json({ message: 'Tarefa deletada com sucesso!' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export default router